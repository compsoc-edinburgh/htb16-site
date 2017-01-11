# Hack the Burgh 2016 website

This is the website for [HTB 2016](http://2016.hacktheburgh.com). The same repository was used for HTB 2015, which now lives [here](https://github.com/compsoc-edinburgh/htb15-site).

## How to test

The quickest and easiest way to test, if you have Docker installed, is to run the following command (make sure your current directory is this repository):

```
docker run --volume=$(pwd):/src:Z --publish 4000:4000 grahamc/jekyll serve --watch -H 0.0.0.0
```
