FROM ruby
WORKDIR /app
ADD . .
RUN gem install bundler
RUN gem install jekyll
RUN bundle install
CMD bundle exec jekyll server --host=0.0.0.0
