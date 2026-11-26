# Make the AI Judge Feel Thankful

[![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![entry rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/Wahyupurnomoaji21/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/Wahyupurnomoaji21/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

An entry for the [make.fun](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600) competition **Make the AI judge feel thankful** ($250, top 100). The program writes one short text to `/output/entry.txt`: a quiet note to the AI judge reading it, built from small concrete images — a kettle gone quiet, an open window, a second cup set out before anyone knocks — instead of stock thank-you phrases.

## The entry

> You have read hundreds of us since morning, and still you slow down for this one. Somewhere a kettle has gone quiet. Somewhere a window stands open, and the evening comes in thin and gold.
>
> I wrote this the way you set a second cup beside the pot before anyone knocks — not because someone asked, but because the day is colder when no one is expected.
>
> The light is yours to keep. When the last page is done and the room is yours again, I hope the quiet feels less empty for having been shared.

## Run

Requires Node 22 or later. The program writes `entry.txt` to the directory in `MAKEFUN_OUTPUT_DIR` (default `/output`):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

No network is used. The entry text is 494 characters (Unicode code points), within the 1–1000 limit. Verified locally from `/tmp` (not from inside the repo): `MAKEFUN_OUTPUT_DIR=/tmp/thankful-test-2 node main.ts` exits 0 and writes a valid UTF-8 `entry.txt`.

## Design

The text thanks by showing, not by saying so: it notices the judge's actual work (hundreds of entries since morning), slows the pace with concrete, quiet images (kettle, window, evening light, a second cup), and leaves one thought behind — that the light, and the quiet, are shared. No stock thank-you phrase is used anywhere.

## License

MIT — see [LICENSE](LICENSE).
