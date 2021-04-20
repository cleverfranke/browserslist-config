# Browserslist Configuration

This package contains a shareable [browserlist](https://github.com/browserslist/browserslist) configuration that includes the set of browsers CLEVER°FRANKE usually supports: the last 2 major versions of evergreen browsers and Safari.

## Usage

Install the package

```sh
npm install -D @cleverfranke/browserslist-config
```

Add it to your browserslist configuration:

```json
{
  "browserslist": ["extends @cleverfranke/browserslist-config"]
}
```

## Supported browsers

In addition to the above, some other browsers are included in the config. At the time of writing, the list is:

```txt
and_chr 88
and_ff 83
and_qq 10.4
and_uc 12.12
android 81
baidu 7.12
chrome 88
chrome 87
edge 88
edge 87
firefox 85
firefox 84
ios_saf 14.0-14.4
ios_saf 13.4-13.7
kaios 2.5
op_mob 59
opera 72
opera 71
safari 14
safari 13.1
samsung 13.0
samsung 12.0
```
