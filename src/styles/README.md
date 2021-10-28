# instrail-frontend scss documentation
This File contains a list of the utility classes in this styles template

***
# Variables


all available variables are in the `_variables.scss` file, some of them include

  * Colors
    * $dark
    * $blue
    * $dark-blue
    * $blue
    * $grey
    * $orange
    * $light-orange
    * $info
    * $light-green
    * $green
    * $white
    * $transparent
    * $red

***
# Mixins
all available mixins are in the `_mixins.scss` file, they include:

  ## on-event

  this mixin is used to handle all mouse events on an element like `hover, focus and active`.
  ```
   // How it is used

    a {
      text-decoration: none;
      @include on-event {
        text-decoration: undeline;
      }
    }
    // Results
    a {
      text-decoration: none;
    }
    a:hover,
    a:focus,
    a:active {
      text-decoration: underline;
    }
  ```
  what this does is that it applies text-decoration of underline to the a tag when a mouse hovers on top of it, or whenever the link is active or whenever the link is in focus

  ** This is an example.

  ## when-inside

  This is useful when you want to style a child element based on what class any of its parents have.
  ```
   // How it is used

    .child {
      color: pink;
      @include when-inside('.parent-modifier') {
        color: red
      }
    }
    // Results
    .child {
      color: pink
    }
    .parent-modifier .child {
      color: red;
    }
  ```
  ** This is an example.

  ## Media Queries

  A shorthand for handlingg media queries
  ```
   // How it is used

    .class {
      width: 100%;
      max-width: 30rem;
      @include mq(md) {
        max-width: 60rem;
      }
      @include mq(lg) {
        max-width: 100rem;
      }
    }
    // Results
    .class {
      width: 100%;
      max-width: 30rem;
    }
    @media screen and (min-width: 768px) {
      .class {
        max-width: 60rem;
      }
    }
    @media screen and (min-width: 100rem) {
      .class {
        max-width: 100rem;
      }
    }
  ```
  ** This is an example.

  ## Color Modifiers

  A function to generate classes based on the list of colors defined in the `_variables.scss` file
  ```
   // How it is used

    .bg {
      @include color-modifiers('background');
    }
    // Results
    .bg-white {
      background: white;
    }
    .bg-dark {
      background: #0B2253;
    }
    .bg-orange {
      background: #D66F0F;
    }
    
  ```
  ** This is an example.

## Grid Generator

  Generates classes for a grid of columns, prefixed by size.
  ```
   // How it is used

    .grid-name {
      display: grid;
      grid-template-columns: repeact(10, 1fr);
      @include grid-generator(10);
    }
    // Results
    .grid-name {
      display: grid;
      grid-template-columns: repeact(10, 1fr);
    }
    .grid-name .col-1 {
      grid-column: span 1;
    }
    .
    .
    .
    .grid-name .col-5{
      grid-column: span 5;
    }
    .
    .
    .grid-name .col-10 {
      grid-column: span 10;
    }
    @media screen and (min-width: 768px) {
      .grid-name .col-md-1 {
        grid-column: span 1;
      }
      .
      .
      .
      .grid-name .col-md-5{
        grid-column: span 5;
      }
      .
      .
      .grid-name .col-md-10 {
        grid-column: span 10;
      }
    }
    @media screen and (min-width: 1025px) {
      .grid-name .col-lg-1 {
        grid-column: span 1;
      }
      .
      .
      .
      .grid-name .col-lg-5{
        grid-column: span 5;
      }
      .
      .
      .grid-name .col-lg-10 {
        grid-column: span 10;
      }
    }
    
  ```
  ** This is an example.

***
# Utility Classes
There are some utility classes that have been created, they include:

## Background
    Sets the background for an element, based on the colors defined in the variables
  ```
    <div class="bg-{color-name}">
      Div content
    </div>

    // Example
    <div class="bg-dark">
      Div content
    </div>

    // This div will be given a background color of `#0B2253`

  ```

## Container
  Main content containers
 * Make the container full-width with a maximum width
 * Center it in the viewport
 * Leave some space on the edges, especially valuable on small screens
```
  <div class="container">
    Div content
  </div>

  // This div will be full width and also centered at all times, and responsive

```

## Hide Text
  Hide text while making it readable for screen readers
```
  <p class="hide-text">
    text content
  </p>

  // This paragraph will not be visible in the browser, but screen reader can read it, for accessibility

```
## Visually Hidden
  Hide element while making it readable for screen readers

```
  <main class="visually-hidden">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will not be visible in the browser at any time

```

## Margin and Padding
  Utility classes for setting margin and padding across the application, goes from 0-10 also accomodates for auto, and sides

```
  <main class="p-0">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will not have padding: 0;

  <main class="p-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding: auto`

  <main class="pb-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding-bottom: auto`

  <main class="pt-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding-top: auto`

  <main class="pl-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding-left: auto`

  <main class="pr-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding-right: auto`

  <main class="px-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding-left: auto; and padding-right: auto;`

  <main class="py-auto">
    <img src="/some/image/url.extension" />
    <h1>Heading <h1/>
  </main>

  // This element block will have `padding-top: auto; and padding-bottom: auto;`


```

** Replace `auto` in the classname of the example above with a number between 0 and 10, including 0 and 10, and the padding value will be replaced with `1rem` for `1` and so on till 10.

** Same rules apply for padding, Just replace `p` in the class name with `m`

## Typography

  The basic utilities needed for typography has been done they include the following

  ```
   <p class="text-bold">This text will be 600 in weight</p>
   <p class="text-light">This text will be 300 in weight</p>
   <p class="text-center">This text will be aligned to the center</p>
   <p class="text-right">This text will be aligned to the right</p>
   <p class="text-left">This text will be aligned to the left</p>
   <p class="text-underline">This text will be underlined</p>
   <p class="text-capitalize">This text will be capitalized</p>
   <p class="text-dark">This text will have the color named dark</p>
   <p class="text-orange">This text will have the color named orange</p>
   <p class="text-white">This text will have the color named white</p>
  ```

  ** for the colors, `text-{color name}` for any of the colors in the `_variables.scss` will change the color of the text to the defined `{color name}`



  
  
Last Updated: 31/08/2021