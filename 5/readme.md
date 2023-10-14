# SCSS Features Implementation

| Feature                                       | Implementation in Code                                     |
| --------------------------------------------- | --------------------------------------------------------- |
| Variables (`$variableName: value;`)           | - Variables are used to store color codes, font names, and other reusable values, making it easy to update styles consistently throughout the code. For example, `$primary-color`, `$font-stack`, and `$footer-background`. |
| Custom Properties (CSS Variables)            | - Custom Properties (CSS Variables) are used throughout the code to define dynamic values that can be changed easily. For example, the code uses Custom Properties for dynamic color changes, such as `--base-color` and `--hover-color`. |
| Importing SCSS files (`@import '_config';`)   | - Importing other SCSS files to reuse styles and configuration settings, like importing `_config`, `_utils`, and `_mobile`. |
| Nesting (`selector { ... }`)                 | - SCSS allows for nesting of CSS selectors to improve code readability. For example, nesting of styles for `.showcase`, `.menuitembar`, and `.menu-title`. |
| Mixins (`@mixin mixin-name { ... }`)          | - Mixins are defined for reusing styles and can be included within other selectors. For instance, `set-background-color` and `set-font-family` mixins are used to set background color and font-family. |
| Functions (`@function functionName() { ... }`) | - Functions are used for creating custom calculations and returning values. In this code, `calculate-column-span` function calculates column spans, and `generate-hover-color` function generates hover colors. |
| Conditional Statements (`@if`, `@else`)        | - Conditional statements are used within SCSS to set background colors based on the lightness of a color. This is applied in the `set-background-color` mixin. |
| Maps (`$map: (key: value);`)                 | - Maps are used to store related values as key-value pairs. The `$color-map` and `$variables-map` are examples, used to define color mappings and variables. |
| Looping (`@each $item in $list { ... }`)     | - Looping is used to iterate through a list of dinner items and their images, generating styles for each item. This is seen in the `$dinner-items` list. |
| placeholder selector (%placeholder-selector { ... })    | - Placeholder selectors define styles that can be extended by other selectors. In this code, `%input-styles` is defined and extended to style form input elements. |
| Pseudo-selectors (`&:hover`)                 | - SCSS allows the use of pseudo-selectors like `:hover` to define styles for elements on hover. These are used in various parts of the code to create hover effects. |
| Responsive Design (Media Queries)             | - Media queries are not explicitly shown in the provided code, but they are often used to implement responsive design in SCSS. These queries would be added as needed to adapt the layout for different screen sizes. |
