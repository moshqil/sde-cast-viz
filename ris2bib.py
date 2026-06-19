#!/usr/bin/env python3
"""Convert RIS citation file(s) to BibTeX.

Usage:
    python3 ris2bib.py file.ris               # prints BibTeX to stdout
    python3 ris2bib.py file.ris -o refs.bib   # writes to refs.bib
    python3 ris2bib.py *.ris -o refs.bib      # combine several RIS files

RIS is the plain-text format you get from Nature / publisher "Cite" buttons.
This handles the common tags; tweak TYPE_MAP / FIELD_MAP if you hit an odd one.
"""
import argparse
import re
import sys

# RIS reference type -> BibTeX entry type
TYPE_MAP = {
    "JOUR": "article", "BOOK": "book", "CHAP": "inbook", "CONF": "inproceedings",
    "CPAPER": "inproceedings", "THES": "phdthesis", "RPRT": "techreport",
    "ELEC": "misc", "GEN": "misc", "UNPB": "unpublished",
}

# RIS tag -> BibTeX field (single-valued)
FIELD_MAP = {
    "TI": "title", "T1": "title", "JO": "journal", "JF": "journal",
    "T2": "journal", "PB": "publisher", "VL": "volume", "IS": "number",
    "SN": "issn", "DO": "doi", "UR": "url", "AB": "abstract",
    "PY": "year", "ID": "_id",
}

MONTHS = ["jan", "feb", "mar", "apr", "may", "jun",
          "jul", "aug", "sep", "oct", "nov", "dec"]


def parse_ris(text):
    """Parse one RIS file into a list of {tag: [values]} records."""
    records, cur = [], None
    for line in text.splitlines():
        m = re.match(r"^([A-Z][A-Z0-9])  - (.*)$", line)
        if not m:
            continue
        tag, val = m.group(1), m.group(2).strip()
        if tag == "TY":
            cur = {"TY": val}
            records.append(cur)
        elif tag == "ER":
            cur = None
        elif cur is not None and val:
            cur.setdefault(tag, []).append(val)
    return records


def make_key(rec, used):
    """Cite key: prefer the RIS ID, else FirstAuthorYear, deduped."""
    key = rec.get("ID", [None])[0]
    if not key:
        author = rec.get("AU", rec.get("A1", ["Anon"]))[0]
        surname = re.sub(r"[^A-Za-z]", "", author.split(",")[0]) or "Anon"
        year = (rec.get("PY", [""])[0] or rec.get("DA", [""])[0])[:4] or "0000"
        key = f"{surname}{year}"
    base, n = key, 1
    while key in used:
        n += 1
        key = f"{base}{chr(ord('a') + n - 2)}"  # base, basea(no)->... -> baseb
    used.add(key)
    return key


def to_bibtex(rec, used):
    etype = TYPE_MAP.get(rec.get("TY", "GEN"), "misc")
    key = make_key(rec, used)
    fields = {}

    # authors
    authors = rec.get("AU", []) + rec.get("A1", [])
    if authors:
        fields["author"] = " and ".join(authors)
    editors = rec.get("ED", []) + rec.get("A2", [])
    if editors:
        fields["editor"] = " and ".join(editors)

    # simple mapped single-valued fields
    for tag, field in FIELD_MAP.items():
        if field in ("_id",):
            continue
        if tag in rec and field not in fields:
            fields[field] = rec[tag][0]

    # pages SP[--EP]
    if "SP" in rec:
        pages = rec["SP"][0]
        if "EP" in rec:
            pages = f"{pages}--{rec['EP'][0]}"
        fields["pages"] = pages

    # year + month from PY / DA (e.g. 2025/05/01)
    date = rec.get("DA", [""])[0] or rec.get("PY", [""])[0]
    if date:
        parts = re.split(r"[/\-]", date)
        if parts and parts[0].isdigit():
            fields["year"] = parts[0]
        if len(parts) > 1 and parts[1].isdigit():
            mi = int(parts[1])
            if 1 <= mi <= 12:
                fields["month"] = MONTHS[mi - 1]  # bare month macro

    # render
    order = ["author", "editor", "title", "journal", "booktitle", "publisher",
             "year", "month", "volume", "number", "pages", "issn", "doi", "url",
             "abstract"]
    keys = [k for k in order if k in fields] + \
           [k for k in fields if k not in order]
    lines = [f"@{etype}{{{key},"]
    for k in keys:
        val = fields[k]
        if k == "month":  # macro, no braces
            lines.append(f"  {k:<8}= {val},")
        else:
            lines.append(f"  {k:<8}= {{{val}}},")
    lines[-1] = lines[-1].rstrip(",")  # drop trailing comma
    lines.append("}")
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser(description="Convert RIS to BibTeX.")
    ap.add_argument("inputs", nargs="+", help="one or more .ris files")
    ap.add_argument("-o", "--output", help="output .bib file (default: stdout)")
    args = ap.parse_args()

    used, entries = set(), []
    for path in args.inputs:
        with open(path, encoding="utf-8-sig") as f:
            for rec in parse_ris(f.read()):
                entries.append(to_bibtex(rec, used))

    out = "\n\n".join(entries) + "\n"
    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            f.write(out)
        print(f"Wrote {len(entries)} entr{'y' if len(entries)==1 else 'ies'} "
              f"to {args.output}", file=sys.stderr)
    else:
        sys.stdout.write(out)


if __name__ == "__main__":
    main()
