# Hack the Burgh 2016: Website

This is the website for HTB 2016. The same repository was used for HTB 2015.

## How to test

The quickest and easiest way to test, if you have Docker installed, is to run the following command (make sure your current directory is this repository):

```
docker run --volume=$(pwd):/src:Z --publish 4000:4000 grahamc/jekyll serve --watch -H 0.0.0.0
```
