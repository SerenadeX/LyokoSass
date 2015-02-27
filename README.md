# LyokoSass


So I noticed that I really have only been using CSS preprocessors for nesting, variables, and some mixins.  However I haven't been utilizing the full potential of all the amazing things that Sass can do.  So I am going to experiment a bit and write my tests in this repository.

You can see the Sass documentation at http://sass-lang.com/documentation/file.SASS_REFERENCE.html



## Notes on Hue, Saturation, and Luminance

The css function `hsla(degrees, percentage, percentage, 0-1)` allows you to have more control over the type of color you are creating.  Hue is the location on the color wheel that you are at in degrees (from 0-360).  Red is at 0 or 360, green at 120, blue at 240.  Saturation is the strength of the color.  0% saturation is greyscale.  100% is the full color.  Lightness is how bright the color is.  0% is black and 100% is completely white.  50% is average.

![Color wheel](http://www.tomjewett.com/colors/hsb.jpg)
