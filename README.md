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
5- I made images for the size they where consumed, and also I have done an sprite for each site, in order to avoid travelling around many times.
6- Every site has his own js and css file, with only what is needed.

For Pizza.html page I did the following.

This page was creating a lot of things messing around with DOM, so I decided to add Handlebars and jQuery. Here are the things I changed.

1- Moved scripts to bottom.
2- Made async scripts when I could.
3- Compressed with uglify / YUI-CSS for javascript and styles.
4- Compressed images with grunt-responsive-images.
5- I made images for the size they where consumed, and also I have done an sprite for each site, in order to avoid travelling around many times.
6- Every site has his own js and css file, with only what is needed.
7- By using Handlebars I added a template in the page for menu. This would helpme to see more clear problem by having a template that will work with my source code to make the html I need at once instead of adding every child.
8- Avoided layout trashing, as in this case some properties where asked and then they change the style of things.
9- They where creating 200 pizzas in the background where you are seing only 35 all the time.
10- I removed the background to another container with position absolute, and animated inside them by using transformations, instead of changing left of elements.
11- In many cases calculations / queries to DOM / and repeating code where removed, so I gained 100 lines over the original js file.

The results with pagespeed are:

$ grunt pagespeed                                                                                    juan@juan
Running "pagespeed:prod" (pagespeed) task

--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist
Strategy:  desktop
Score:     96

CSS size                                   | 6.47 kB
HTML size                                  | 2.72 kB
Image size                                 | 69.7 kB
JavaScript size                            | 27.22 kB
CSS resources                              | 1
Hosts                                      | 2
JS resources                               | 2
Resources                                  | 6
Static resources                           | 1
Total size                                 | 700 B

Enable GZIP compression                    | 0.6
Leverage browser caching                   | 0.5
Minimize render blocking resources         | 2

--------------------------------------------------------


Running "pagespeed:paths" (pagespeed) task

--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist
Strategy:  desktop
Score:     96

CSS size                                   | 6.47 kB
HTML size                                  | 2.72 kB
Image size                                 | 69.7 kB
JavaScript size                            | 27.22 kB
CSS resources                              | 1
Hosts                                      | 2
JS resources                               | 2
Resources                                  | 6
Static resources                           | 1
Total size                                 | 708 B

Enable GZIP compression                    | 0.6
Leverage browser caching                   | 0.5
Minimize render blocking resources         | 2

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/project-webperf.html
Strategy:  desktop
Score:     96

CSS size                                   | 6.18 kB
HTML size                                  | 2.74 kB
Image size                                 | 370.6 kB
JavaScript size                            | 27.22 kB
CSS resources                              | 1
Hosts                                      | 2
JS resources                               | 2
Resources                                  | 6
Static resources                           | 1
Total size                                 | 736 B

Enable GZIP compression                    | 0.56
Leverage browser caching                   | 0.5
Minimize render blocking resources         | 2

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/project-mobile.html
Strategy:  desktop
Score:     96

CSS size                                   | 6.19 kB
HTML size                                  | 2.56 kB
Image size                                 | 219.64 kB
JavaScript size                            | 27.22 kB
CSS resources                              | 1
Hosts                                      | 2
JS resources                               | 2
Resources                                  | 6
Static resources                           | 1
Total size                                 | 732 B

Enable GZIP compression                    | 0.55
Leverage browser caching                   | 0.5
Minimize render blocking resources         | 2

--------------------------------------------------------


--------------------------------------------------------

URL:       nano-degree-performance.herokuapp.com/dist/project-2048.html
Strategy:  desktop
Score:     96

CSS size                                   | 6.17 kB
HTML size                                  | 2.58 kB
Image size                                 | 58.76 kB
JavaScript size                            | 27.29 kB
CSS resources                              | 1
Hosts                                      | 2
JS resources                               | 2
Resources                                  | 6
Static resources                           | 1
Total size                                 | 729 B

Enable GZIP compression                    | 0.55
Leverage browser caching                   | 0.5
Minimize render blocking resources         | 2

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

The last one has only a 63 score because the size of javascript and images. Size in javascript is bigger beacouse I used a bit jquery and Handlebars libraries.
