tl = new TimelineMax({repeat: -1});
tl.to("#one", 2, {morphSVG:"#two", ease:Bounce.easeOut})
.to("#one", 2, {morphSVG:"#three", ease:Bounce.easeOut})
.to("#one", 2, {morphSVG:"#one", ease:Bounce.easeOut});