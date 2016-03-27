
<script src="http://d3js.org/d3.v3.min.js"></script>

<script>

var deaths = function(d) { return d.deathcount;};

var rscale = d3.scale.linear()
             .domain([1, d3.max(function(d) { return d.deathcount;};)])
             .range([1, 12]);


d3.csv("final_data_frame_complete.csv", function(error, data) {

data.forEach(function(d) {
    d.ProductionBudget = +d.ProductionBudget;
    d.BoxOffice = +d.BoxOffice;
    d.deathcount = +d.deathcount;
    console.log(d);
  });



});

</script>