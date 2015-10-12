## Website Performance Optimization portfolio project

This project is for website performance optimization. It has 5 pages to be optimized.

In order to test and measure I have built a nodejs server with express and deployed to heroku. This way I can analize the impact of everything I have done in localhost, but for real.

In this address: https://nano-degree-performance.herokuapp.com/dist/ you will find everything optimized.

In this address: https://nano-degree-performance.herokuapp.com/before/ you will find everything NOT optimized.

You will find the results in heroku as long as there is a dyno for it XD, that means after being approved probably it will be not deployed, but actually you can see the results in here.

For this pages: index.html, project-mobile.html, project-2048.html, project-webperf.html, I have done the following:

1- Moved scripts to bottom.

2- Made async scripts when I could.

3- Compressed with uglify / YUI-CSS for javascript and styles.

4- Compressed images with grunt-responsive-images.

5- Added those compressed scripts and styles without making any request, as inline. This makes a load time faster for images and other resources.

For Pizza.html page I did the following.

This page was creating a lot of things messing around with DOM, so I decided to add Handlebars and jQuery. Here are the things I changed.

1- Moved scripts to bottom.

2- Made async scripts when I could.

3- Compressed with uglify / YUI-CSS for javascript and styles.

4- Compressed images with grunt-responsive-images.

8- By using Handlebars I added a template in the page for menu. This would helpme to see more clear problem by having a template that will work with my source code to make the html I need at once instead of adding every child.

9- Avoided layout trashing, as in this case some properties where asked and then they change the style of things.

10- They where creating 200 pizzas in the background where you are seing only 35 all the time.

11- I removed the background to another container with position absolute, and animated inside them by using transformations, instead of changing left of elements.

12- In many cases calculations / queries to DOM / and repeating code where removed, so I gained 100 lines over the original js file.

The results with pagespeed are:

$ grunt pagespeed              juan@juan

Running "pagespeed:prod" (pagespeed) task

--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist

Strategy:  desktop

Score:     96

HTML size                                  | 8.67 kB

Image size                                 | 53.58 kB

JavaScript size                            | 26.62 kB

Hosts                                      | 2

JS resources                               | 1

Resources                                  | 8

Static resources                           | 1

Total size                                 | 971 B


Enable GZIP compression                    | 0.58

Leverage browser caching                   | 0.5

Minify HTML                                | 0.06

Optimize images                            | 2.08

--------------------------------------------------------


Running "pagespeed:paths" (pagespeed) task

--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist

Strategy:  desktop

Score:     96

HTML size                                  | 8.67 kB

Image size                                 | 53.58 kB

JavaScript size                            | 26.62 kB

Hosts                                      | 2

JS resources                               | 1

Resources                                  | 8

Static resources                           | 1

Total size                                 | 981 B

Enable GZIP compression                    | 0.58

Leverage browser caching                   | 0.5

Minify HTML                                | 0.06

Optimize images                            | 2.08

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/project-2048.html

Strategy:  desktop

Score:     96

HTML size                                  | 8.47 kB

Image size                                 | 71.25 kB

JavaScript size                            | 26.7 kB

Hosts                                      | 2

JS resources                               | 1

Resources                                  | 5

Static resources                           | 1

Total size                                 | 675 B

Enable GZIP compression                    | 0.54

Leverage browser caching                   | 0.5

Optimize images                            | 2.38

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/project-mobile.html

Strategy:  desktop

Score:     97

HTML size                                  | 8.52 kB

Image size                                 | 137.81 kB

JavaScript size                            | 26.62 kB

Hosts                                      | 2

JS resources                               | 1

Resources                                  | 5

Static resources                           | 1

Total size                                 | 701 B

Enable GZIP compression                    | 0.55

Leverage browser caching                   | 0.5

Optimize images                            | 0.71

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/pizza.html

Strategy:  desktop

Score:     63

CSS size                                   | 10.72 kB

HTML size                                  | 4.99 kB

Image size                                 | 475.54 kB

JavaScript size                            | 172.29 kB

CSS resources                              | 1

Hosts                                      | 1

JS resources                               | 1

Resources                                  | 4
Total size                                 | 328 B

Enable GZIP compression                    | 12.68

Minify HTML                                | 0.11

Minimize render blocking resources         | 2

Optimize images                            | 45.92

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/project-webperf.html

Strategy:  desktop

Score:     96

HTML size                                  | 8.63 kB

Image size                                 | 273.7 kB

JavaScript size                            | 26.62 kB

Hosts                                      | 2

JS resources                               | 1

Resources                                  | 5

Static resources                           | 1

Total size                                 | 689 B

Enable GZIP compression                    | 0.55

Leverage browser caching                   | 0.5

Optimize images                            | 2.09

--------------------------------------------------------

## In order to run the application:

You can check 2 ways to see performance changes.

1- The first one is by comparing this two sites, which are the code in dist/ folder

In this address: https://nano-degree-performance.herokuapp.com/dist/ you will find everything optimized.

In this address: https://nano-degree-performance.herokuapp.com/before/ you will find everything NOT optimized.

Also you will be able to see the pagespeed score by running 

$ grunt pagespeed

2- The second one is to run the following command

$ node app

And then navigate to the different sources checking the time lines exposed locally for the before and dist pages by accesing to http://localhost:3000 .

You can always expose this pages in apache or python in order to see the results in both cases.

## Conclusions:

After measuring every page and saw some of the sources on this course for web optimizations and browser rendering optimizations. I realize it is important not to make too many calculations and avoid queries to DOM.
In some cases I have to avoid layout trashing, excesive layouts, and calculations during animations.

