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


### Troubleshooting

#### SSL issues when running `bundle install`

If you get an SSL certificate warning, you can try building the latest, stable release of Ruby (as per the `.ruby-version` file).

Alternatively, you can try to resolve the SSL issues with your current version of Ruby by following the directions on [this gist](https://gist.github.com/luislavena/f064211759ee0f806c88).
