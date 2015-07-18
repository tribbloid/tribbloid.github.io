# Spooky Stuff landing page

## Development

Make sure you are using the right version of Ruby as per the `.ruby-version` file. [RVM](https://rvm.io/rvm/install) can help with that.

Run the following command to install the Gem dependencies:

    gem install bundler
    bundle install


### Style

To maintain consistent style, use the [Editorconfig plugin](http://editorconfig.org/#download) for your text editor or IDE.


### Serving the Jekyll site

To serve the site at [http://localhost:4000](http://localhost:4000), run the following command:

    bundle exec jekyll serve


### Maintaining the Jekyll website

Jekyll is updated frequently. To ensure that the site locally looks as it does on Github pages, periodically you may need to update the required dependencies and run the site. Update using the following command:

    bundle update


### Making pages

A page, e.g. `./product/index.md`, generally looks like this:

```yml
---
title: Product
layout: product
summary: Spooky Stuff is a scalable query engine for web scraping, data mashup, and acceptance QA
---

SpookyStuff scales up data collection by distributing web clients to many machines.

Spooky Stuff is a scalable query engine for web scraping, data mashup, and acceptance QA, powered by Apache Spark.

A more detailed blurb about Spooky Stuff, perhaps a couple of paragraphs.
```

It's Markdown and contains Yaml front-matter like `title`, `layout`, etc. (variables).


#### Front matter

- title: title of the page (shows up in the window title)
- layout: layout of the page
- meta_description: meta tag description, used by search engines

Other pages may utilize other front-matter on a per-layout basis.


### Layouts

All HTML should go in the layout file for that page.

Each page has a layout assigned to it in its front-matter, e.g.:

```yml
---
title: Home Page
layout: default
---
```

The above example uses `_layouts/default.html` as its layout.


### Partials

Partials are defined in: `_includes` and are included on pages and layouts as so:

```liquid
{% include header.html %}
```


### Troubleshooting

#### SSL issues when running `bundle install`

If you get an SSL certificate warning, you can try building the latest, stable release of Ruby (as per the `.ruby-version` file).

Alternatively, you can try to resolve the SSL issues with your current version of Ruby by following the directions on [this gist](https://gist.github.com/luislavena/f064211759ee0f806c88).
