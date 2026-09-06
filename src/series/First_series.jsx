import React, { useEffect, useRef, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff, RotateCcw, Code2, ExternalLink } from "lucide-react";
import "../css/first_series.css";

const uiComponents = [
  {
    id: 1,
    title: "Amazing Loading Screen",
    description: "Amazing Loading Screen using pure HTML and CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/00001.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/00001.html",
    tag: "CSS · Animation",
  },
  {
    id: 2,
    title: "Hover Button",
    description: "Hover Button using pure HTML, CSS and JS only!!",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0002.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0002.html",
    tag: "CSS · Interaction",
  },
  {
    id: 3,
    title: "Loading Bar",
    description: "Smooth loading bar animation using HTML & CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0003.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0003.html",
    tag: "CSS · Animation",
  },
  {
    id: 4,
    title: "Digital Clock",
    description: "Live digital clock using HTML, CSS & JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0004.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0004.html",
    tag: "JS · Clock",
  },
  {
    id: 5,
    title: "Click to Change Background",
    description: "Dynamic background color changer on click",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0005.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0005.html",
    tag: "JS · Interaction",
  },
  {
    id: 6,
    title: "HTML Slider Range",
    description: "Stylish custom HTML range slider",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0006.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0006.html",
    tag: "HTML · CSS",
  },
  {
    id: 7,
    title: "Solar System",
    description: "Animated solar system using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0007.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0007.html",
    tag: "CSS · Animation",
  },
  {
    id: 8,
    title: "Flame Animation",
    description: "Creative flame animation using HTML and CSS only",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0008.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0008.html",
    tag: "CSS · Animation",
  },
  {
    id: 9,
    title: "Unique Slider",
    description: "Unique slider using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0009.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0009.html",
    tag: "JS · UI",
  },
  {
    id: 10,
    title: "Login Form Design",
    description: "Modern login page using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0010.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0010.html",
    tag: "HTML · CSS · Form",
  },
  {
    id: 11,
    title: "Creative Button Animation",
    description: "Creative button animation using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0011.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0011.html",
    tag: "CSS · Animation",
  },
  {
    id: 13,
    title: "Working Analog Clock",
    description: "Fully working analog clock using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0013.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0013.html",
    tag: "JS · Clock",
  },
  {
    id: 14,
    title: "Circle Animation",
    description: "Circle animation using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0014.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0014.html",
    tag: "CSS · Animation",
  },
  {
    id: 15,
    title: "Creative Text Animation",
    description: "Text animation using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0015.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0015.html",
    tag: "CSS · Text",
  },
  {
    id: 16,
    title: "Bulb On / Off",
    description: "Interactive bulb toggle using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0016.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0016.html",
    tag: "JS · Interaction",
  },
  {
    id: 17,
    title: "Squares Animation",
    description: "Squares animation using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0017.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0017.html",
    tag: "CSS · Animation",
  },
  {
    id: 20,
    title: "Animated Background",
    description: "Dynamic animated background using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0020.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0020.html",
    tag: "CSS · Background",
  },
  {
    id: 21,
    title: "Ghost Text Effect",
    description: "Hover ghost text effect using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0021.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0021.html",
    tag: "CSS · Text",
  },
  {
    id: 22,
    title: "Cat Hands Game",
    description: "Cat Hands — mini endless game in HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0022.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0022.html",
    tag: "JS · Game",
  },
  {
    id: 23,
    title: "Pulse Animation",
    description: "Pulse animation using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0023.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0023.html",
    tag: "CSS · Animation",
  },
  {
    id: 24,
    title: "Line Animation",
    description: "Line animation using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0024.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0024.html",
    tag: "CSS · Animation",
  },
  {
    id: 25,
    title: "Image Slider",
    description: "Smooth image slider using HTML, CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0025.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0025.html",
    tag: "JS · UI",
  },

  {
    id: 26,
    title: "Animated Magnetic Background",
    description: "Smooth Animated Magnetic Background",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0026.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0026.html",
    tags: "JS · Animation",
  },

  {
    id: 27,
    title: "Drag and Drop Animation",
    description: "Simple Drag and Drop animation using JavaScript",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0027.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0027.html",
    tags: "Animation · JS"
  },
  {
    id: 28,
    title: "CSS Animation",
    description: "Simple CSS Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0028.html",
    code: 'https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0028.html',
    tags: "Animation · CSS "
  },

  {
    id: 29,
    title: "Creative Text Animation",
    description: "Changing Text colours using CSS and JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0029.html",
    code: "https://github.com/pranjalvidyarthi/100_Days_Html_CSS_JS_Series/blob/main/0029.html",
    tags: "CSS · JS · Animation · Text Animation"
  },

  {
    id: 30,
    title: "Loading Animation",
    description: "Amazing CSS Loading Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0030.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0030.html",
    tags: "CSS · Animation  · Loading"
  },

  {
    id: 31,
    title: "Border Animation",
    description: "I created this Border animation using CSS only!!",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0031",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0031.html",
    tags: "Animation · css ·  Border"
  },

  {
    id: 32,
    title: "CSS Animation",
    description: "CSS Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0032.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0032.html",
    tags: "CSS · Animation ·  JS"
  },

  {
    id: 33,
    title: "Happy New Year 2025",
    description: "Hover to change the year",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0033.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0033.html",
    tags: "CSS · Animation · HTML ·  New Year"
  },

  {
    id: 34,
    title: "Loading Animation",
    description: "Loading Animation using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0034.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0034.html",
    tags: "CSS · Animation ·  Html"
  },

  {
    id: 35,
    title: "Transparent Button Animation",
    description: "Transparent Button Animation using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0035.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0035.html",
    tags: "·"
  },

  {
    id: 36,
    title: "Loading Animation",
    description: "Loading Animation using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0036.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0036.html",
    tags: "CSS · Html"
  },

  {
    id: 37,
    title: "Alien Box",
    description: "Alien Box",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0037.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0037.html",
    tags: "·"
  },

  {
    id: 38,
    title: "Merry Christmas",
    description: "Merry Christmas",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0038",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0038.html",
    tags: "·"
  },

  {
    id: 39,
    title: "Profile Card",
    description: "Profile Card Design",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0039.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0039.html",
    tags: "·"
  },

  {
    id: 40,
    title: "",
    description: "",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0040.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0040.html",
    tags: "·"
  },

  {
    id: 41,
    title: "Keyboard UI ",
    description: "Creating Keyboard UI using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0041.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0041.html",
    tags: "CSS · UI · Animation"
  },

  {
    id: 42,
    title: "Glowing Border",
    description: "Glowing Border uing CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0042.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0042.html",
    tags: "·"
  },

  {
    id: 43,
    title: "CSS Animation | Glowing Lights",
    description: "CSS Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0043.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0043.html",
    tags: "CSS · Animation"
  },

  {
    id: 44,
    title: "Glowing Bowl",
    description: "Glowing Bowl",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0044.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0044.html",
    tags: "CSS · Animation · Glowing"
  },

  {
    id: 45,
    title: "File Not Found",
    description: "",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0045.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0045.html",
    tags: "·"
  },

  {
    id: 46,
    title: "Loading Animation | Circular half rings",
    description: "Loading Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0046.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0046.html",
    tags: "·"
  },

  {
    id: 47,
    title: "Hover Button Animation",
    description: "Hover button to change the button design",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0047.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0047.html",
    tags: "·"
  },

  {
    id: 48,
    title: "OTP Verification Page",
    description: "One Time Password (OTP) Verification Page Design",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0048.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0048.html",
    tags: "·"
  },

  {
    id: 49,
    title: "Glowing Text",
    description: "Glowing Text",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0049.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0049.html",
    tags: "Text Animation · CSS"
  },

  {
    id: 50,
    title: "Awesome Magic Indicator",
    description: "Awesome Magic Indicator using HTML CSS And JS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0050.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0050.html",
    tags: " CSS · Animation · Html · Indication"
  },

  {
    id: 51,
    title: "Profile Card Design",
    description: "Profile Card Design | Hover to contact",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0051.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0051.html",
    tags: "CSS · Animation"
  },

  {
    id: 52,
    title: "CSS Animation",
    description: "",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0052.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0052.html",
    tags: "CSS · Animation"
  },

  {
    id: 53,
    title: "SVG Animation",
    description: "SVG Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0053.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0053.html",
    tags: "Animation · SVG"
  },

  {
    id: 54,
    title: "Neurophism Range Slide",
    description: "Neurophism Range Slide",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0054.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0054.html",
    tags: "Animation · Neurophism "
  },


  {
    id: 55,
    title: "New to You YouTube Button",
    description: "New to You || YouTube Button",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0055.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0055.html",
    tags: "·"
  },


  {
    id: 56,
    title: "Neumorphism Animation",
    description: "Neumorphism Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0056.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0056.html",
    tags: "Neumorphism Animation · CSS"
  },


  {
    id: 57,
    title: "Ripple Button Effect",
    description: "Ripple Button Effect using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0057.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0057.html",
    tags: "CSS · Ripple Effect"
  },


  {
    id: 58,
    title: " Awesome Cursor  Animation",
    description: " Awesome Cursor  Animation on mousemove with CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0058.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0058.html",
    tags: "Animation · Cursor Animation"
  },


  {
    id: 59,
    title: "Change background color with drop -menu ",
    description: "Change background color with drop -menu ",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0059.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0059.html",
    tags: "css · animation"
  },


  {
    id: 60,
    title: "Amazing Clock Design",
    description: "Amazing Clock Design",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0060.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0060.html",
    tags: "·"
  },


  {
    id: 61,
    title: " Shape Animation",
    description: " Shape Animation using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0061.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0061.html",
    tags: "Animation · CSS"
  },


  {
    id: 62,
    title: "Underline Animation",
    description: "Underline Text Animation",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0067.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0067.html",
    tags: "CSS · Animation"
  },

  {
    id: 63,
    title: "Animated Text on Hover",
    description: "Animated Text on Hover",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0063.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0063.html",
    tags: "CSS · Hover  · Animation"
  },

  {
    id: 64,
    title: "Analog CLock",
    description: "Analog CLock Using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0064.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0064.html",
    tags: "Analog Clock · CSS"
  },

  {
    id: 65,
    title: "Hover Button Effect",
    description: "Hover Button Effect using CSS",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0065.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0065.html",
    tags: "Hover · button  · css"
  },

  {
    id: 66,
    title: "Transparent Digtial Clock",
    description: "Transparent Digtial Clock",
    preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0066.html",
    code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0066.html",
    tags: " CSS · Digital Clock"
  },


   {
  id: 67,
  title: " Simple Calculator",
  description: " Simple calculator using JS",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0067.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0067.html",
  tags: "CSS · calculator · JS"
},

{
  id: 68,
  title: "Animated Skill Bar",
  description: "Animated Skill Bar UI Design",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0068.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0068.html",
  tags: "CSS · UI · Animation"
},

{
  id: 69,
  title: " Card Hover Effect",
  description: " Card Hover Effect",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0069.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0069.html",
  tags: "Hover· Animation"
},

{
  id: 70,
  title: "Hover Effect",
  description: "Hover Effect ",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0070.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0070.html",
  tags: "CSS · Hover "
},

{
  id: 71,
  title: "Input Animation",
  description: "Input Animation | UI Design",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0071.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0071.html",
  tags: "CSS  Animation"
},

{
  id: 72,
  title: "Happy New Year Animation",
  description: "Happy New Year with Animation",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0072.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0072.html",
  tags: "CSS · New Year · Animation"
},

{
  id: 73,
  title: "JavaScript Animated background",
  description: "JavaScript Animated background",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0073.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0073.html",
  tags: "JavaScript · UI"
},

{
  id: 74,
  title: "Input Text Field character counterrogress Bar",
  description: "Input Text Field character counter",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0074.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0074.html",
  tags: "CSS · Counter"
},

{
  id: 75,
  title: "Triangles Animation",
  description: "Triangles Animation using CSS",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0075.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0075.html",
  tags: "CSS · Animation"
},

{
  id: 76,
  title: "Login Form UI",
  description: "Login Form UI",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0076.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0076.html",
  tags: "JavaScript · UI"
},

{
  id: 77,
  title: "Geometrical Loading Screen",
  description: "Geometrical Loading Screen",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0077.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0077.html",
  tags: "JavaScript · Loading"
},

{
  id: 78,
  title: "CSS Zero Collision Effect",
  description: "CSS Zero Collision Effect",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0078.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0078.html",
  tags: "CSS "
},

{
  id: 79,
  title: "Password Generator",
  description: "Password Generator",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0079.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0079.html",
  tags: "JavaScript "
},

{
  id: 80,
  title: "Creative CSS Animation",
  description: "CSS Animation",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0080.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0080.html",
  tags: "CSS · Animation"
},

{
  id: 81,
  title: "Animated Blooming Flower",
  description: "Animated Blooming Flower",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0081.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0081.html",
  tags: "CSS · UI"
},

{
  id: 82,
  title: "simple CSS Animation ",
  description: "simple CSS Animation ",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0082.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0082.html",
  tags: "CSS · Animation"
},

{
  id: 83,
  title: "JavaScript Toggle Button",
  description: "JavaScript Toggle Button",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0083.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0083.html",
  tags: "CSS · JavaScript · UI"
},

{
  id: 84,
  title: " Multiple Particles Animation",
  description: " Multiple Particles Animation",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0084.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0084.html",
  tags: "CSS · Animation"
},

{
  id: 85,
  title: "Quick CSS Animnation",
  description: "Quick CSS Animnationn",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0085.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0085.html",
  tags: "CSS · Animation"
},

{
  id: 86,
  title: " SVG Animation",
  description: " SVG Animation",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0086.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0086.html",
  tags: "CSS · Animation"
},

{
  id: 87,
  title: " Animated Number Spinner",
  description: " Animated Number Spinner",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0087.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0087.html",
  tags: "JavaScript · Animation"
},

{
  id: 88,
  title: "CSS Climb Animation",
  description: "CSS Climb Animation",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0088.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0088.html",
  tags: "Animation · CSS"
},

{
  id: 89,
  title: " Hover Animation",
  description: " Hover Animation",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0089.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0089.html",
  tags: "CSS · Animation - Hover"
},

{
  id: 90,
  title: "Custom Smiley Checkbox",
  description: "Custom Smiley Checkbox",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0090.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0090.html",
  tags: "CSS · UI"
},

{
  id: 91,
  title: " Button Hover Effects",
  description: " Button Hover Effects",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0091.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0091.html",
  tags: "Button  · JavaScript · CSSr"
},

{
  id: 92,
  title: "3D Pyramid Ambient Light Effects",
  description: "3D Pyramid Ambient Light Effects",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0092.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0092.html",
  tags: "JavaScript · CSS"
},

{
  id: 93,
  title: "Chalk Handwritting Effects",
  description: "Chalk Handwritting Effects",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0093.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0093.html",
  tags: "CSS · Animation"
},

{
  id: 94,
  title: "Hover Effect",
  description: "Hover Effect",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0094.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0094.html",
  tags: "CSS · Hover"
},

{
  id: 95,
  title: "Unexpected Hover Effect",
  description: "",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0095.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0095.html",
  tags: "JavaScript · Hover"
},

{
  id: 96,
  title: "Hover Buttonr",
  description: "",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0096.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0096.html",
  tags: "JavaScript · Hover"
},

{
  id: 97,
  title: "Animated NavBar",
  description: "Animated NavBar",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0097.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0097.html",
  tags: "CSS · Navbar"
},

{
  id: 98,
  title: "Login Form",
  description: "Login Form",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0098.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0098.html",
  tags: "JavaScript · Form"
},

{
  id: 99,
  title: "Card Flip",
  description: "",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0099.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0099.html",
  tags: "JavaScript · CSS"
},

{
  id: 100,
  title: "Indian Flag",
  description: "Indian Flag using CSS only!! ",
  preview: "https://pranjalvidyarthi.github.io/100_Days_Html_CSS_JS_Series/0100.html",
  code: "https://github.com/pranjalviyarthi/100_Days_Html_CSS_JS_Series/blob/main/0100.html",
  tags: "Republic Day · India· CSS · JavaScript"
},



];

const isMobileDevice = () => window.innerWidth <= 768;

const DesignCard = ({ item, index }) => {
  const [activePreview, setActivePreview] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const mobile = isMobileDevice();
  const col = index % 3; // stagger direction: left / center / right

  return (
    <div
      ref={cardRef}
      className={`col-md-6 col-lg-4 mb-4 hs-col hs-col--${col} ${visible ? "hs-visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
    >
      <div className="hs-card">
        {/* day badge */}
        <span className="hs-day-badge">Day {item.id}</span>

        {/* preview box */}
        <div
          className={`hs-preview ${activePreview ? "hs-preview--active" : ""}`}
          onClick={() => !mobile && setActivePreview(true)}
        >
          {activePreview && !mobile ? (
            <>
              <div className="hs-iframe-wrap">
                <iframe
                  src={item.preview}
                  title={item.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <button
                className="hs-reset-btn"
                onClick={(e) => { e.stopPropagation(); setActivePreview(false); }}
                title="Reset preview"
              >
                <RotateCcw size={14} />
              </button>
            </>
          ) : (
            <div className="hs-preview-placeholder">
              {mobile ? (
                <>
                  <EyeOff size={28} className="hs-eye-icon" />
                  <p>Mobile preview disabled</p>
                </>
              ) : (
                <>
                  <div className="hs-eye-ring">
                    <Eye size={26} className="hs-eye-icon" />
                  </div>
                  <p>Click to preview</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* card body */}
        <div className="hs-card-body">
          <p className="hs-card-tag">{item.tag}</p>
          <h5 className="hs-card-title">{item.title}</h5>
          <p className="hs-card-desc">{item.description}</p>

          <div className="hs-card-actions">
            <a href={item.code} target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn--code">
              <Code2 size={14} />
              <span>Code</span>
            </a>
            <a href={item.preview} target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn--live">
              <ExternalLink size={14} />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const First_series = () => {
  return (
    <section className="hs-section">
      <div className="hs-grid-bg" aria-hidden="true" />

      {/* floating ghost text */}
      <span className="hs-ghost-text" aria-hidden="true">100</span>

      <div className="container position-relative">

        {/* header */}
        <div className="hs-header">
          <p className="hs-eyebrow">Day by day</p>
          <h2 className="hs-title">
            100 Days <span className="hs-title__accent">HTML</span> Designs
          </h2>
          <p className="hs-subtitle">
            One design every day — click any card to preview it live.
          </p>

          {/* stats row */}
          <div className="hs-stats">
            <div className="hs-stat">
              <span className="hs-stat__val">100</span>
              <span className="hs-stat__lbl">Shown</span>
            </div>
            <div className="hs-stat-div" />
            <div className="hs-stat">
              <span className="hs-stat__val">100</span>
              <span className="hs-stat__lbl">Total</span>
            </div>
            <div className="hs-stat-div" />
            <div className="hs-stat">
              <span className="hs-stat__val">HTML</span>
              <span className="hs-stat__lbl">Stack</span>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className="row">
          {uiComponents.map((item, i) => (
            <DesignCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default First_series;