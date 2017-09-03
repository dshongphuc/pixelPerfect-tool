# Pixel-Perfect
Pixel-Perfect is the simple jQuery plugin to help you when you code your Design to HTML/CSS. 
<br>
When I coded from PSD to HTML/CSS files, my designer complained that my code is not exactly like his design. Some size of element are smaller or bigger than his design, and the alignment is not stay perfect in the bootstrap column. So, I built this tool for that reason ! :) 
<br><br>

# Screenshot : <br>
<img src="http://res.cloudinary.com/veseylab/image/upload/v1504424119/pixelPerfect-screenshot_grjscb.jpg">


# What's included?
This is a very simple tool, it's include 3 tool upto now : 
1. The column overlay (help you to align your element like Photoshop) based on Bootstrap Column.
2. The grid overlay (help you align or measure by your eye)
3. The ruler (just like the Rectagular marquee tool in Photoshop) : It's very helpful when you need some element to be exactly like your design.


# How to use?
As I said above, I built this by jQuery syntax and based on Bootstrap column. So, please make sure you've included jQuery and Bootstrap inside your file first.
<br>
After that, the only simple thing you have to do is include this tool to your file and call it to use : 
````html 
    <script src="pixelPerfect.min.js"></script>
    <script>
      pixelPerfect.Start();
    </script>
````
By default, I made it as a full-width column, that mean the column is use for full-width project, just like you use class .container-fluid in Bootstrap. So, if you don't want to use the full-width column, you can use it as the boxed-width, just set the fullWidth value to false  before you call it start :
````html
    <script>
      pixelPerfect.fullWidth = false;
      pixelPerfect.Start();
    </script>
````    

# The shortcut
1. If you want to turn on/off the column when viewing your page, just press 'c' on your keyboard.
2. If you want to turn on/off the Grid, just press 'g' on your keyboard.
3. If you want to turn on/off both grid, and column, press 'a' ('a' stand for All in this case).
4. If you want to turn on/off the Ruler, press 'r' on your keyboard.

# What's next?
Nothing, just hope you enjoy this tool :). I still wanna build more tool to help Front-end developer can do their job faster and more perfectly, if you have any idea, just drop me a line.

# License
Under MIT license.
