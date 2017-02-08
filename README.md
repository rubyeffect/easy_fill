# Easy Fill

Easy Fill javascript library is for developers and testers. It gives a link to the top left corner of the page and when it is clicked, it fills placeholder content into your form that is on the current page.

## Setup

Add this line at the bottom of your layout/html file:

```html
<script type="text/javascript" src="/path/to/easy_fill-0.0.2.min.js"></script>
```

## Usage

A link will be shown at the top left corner of the browser with label: 'Easy Fill'. Click that to fill the form on your page.

**form tag class options**

1. `fill-form`, perform auto fill.

2. `skip-form-fill`, skip auto.

3. `skip-data-overwrite`, skip input field value overwrite.

**Note:** Please refer `examples/demo-1.html` and `examples/demo-2.html` for examples.

## Libraries Used

1. jQuery (https://github.com/jquery/jquery)
2. Faker (https://github.com/Marak/faker.js)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rubyeffect/easy_fill.

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Changelog

**August 30, 2015**

1. If there are multiple forms on a page, only for the desired forms a value is filled in input field by adding 'fill-form' class to form tag. The rest of the forms will be ignored.

2. If there are multiple forms on a page, desired forms can be ignored for auto fill by adding 'skip-form-fill' class to form tag. The rest of the forms input fields will be auto filled.

3. To avoid overwrite of existing value of form fields, add 'skip-data-overwrite' class to form tag. 

## Authored by

Sanjay Vedula(sanjay.vedula@gmail.com)

## About RubyEffect

<a href="http://www.rubyeffect.com" target="_blank">
  <img src="http://blog.rubyeffect.com/wp-content/uploads/2015/05/cropped-re_original_logo.png" alt="RubyEffect">
</a>

RubyEffect builds intuitive, live and elegant software that solves real world problems. We love open source and it's community.

Liked this library? You may also like the articles we post on our [blog](http://blog.rubyeffect.com). Please do check

We would love to work on your ideas and see them grow. Say hello @ http://rubyeffect.com/contact
