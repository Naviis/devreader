<!doctype html>
<!--[if IE 9]> <html class="no-js ie9" lang="fr"> <![endif]-->
<!--[if gt IE 9]> <!--><html class="no-js" lang="fr"> <!--<![endif]-->
<head>
		<meta charset="UTF-8">
		<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
		<title>Dev Reader</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css" media="all">
</head>
<body>
	<header class="r_header">
	    <h1>Dev <span>Reader</span></h1>
	</header>
	
    <!-- FILTERS -->
    
	<div class="r_filters" data-bind="css: {opened : feedsPanelOpened}">
	    <a href="#" class="r_filters_panelButton icon-params" data-bind="click : toggleFeedsPanel"></a>
	    
	    <div class="r_fp">
	        <header class="r_fp_header"  data-bind="click : toggleFeedsPanel">
	            <span>close</span> 
	        </header>
	        <div class="r_fp_content">
	            
	            <div class="fp_search g_standaloneField" data-bind="visible: feedsList().length > 0">
	                <label for="fp_searchInput" class="icon-search"></label>
	                <input type="text" name="fp_searchInput" id="fp_searchInput" class="g_textInput">
	            </div>
	            
	            <ul class="fp_feedsList" data-bind="foreach: feedsList, visible: feedsList().length > 0">
                    <li>
                        <input type="radio" value="" name="currentFeed" data-bind="attr: {id:id,value:id}, checked: $root.currentFeed" > <label data-bind="text: name, attr: {for:id}"></label>
                    </li>                    
	            </ul>
	            
	            <p class="fp_noFeeds"  data-bind="visible: feedsList().length == 0">No feeds in your list</p>
	            
	            <a href="#" class="fp_add" data-bind="click : toggleAddPanel">+</a>
	            
	        </div>
	    </div>
	</div>
	
	<!-- CONTENT -->
	
	<div class="r_content" data-bind="css : { panel_shown : feedsPanelOpened}">
	    
	    <div class="r_content_wpr">
            <!-- ko foreach: feedsList -->
            <!-- ko if: $root.currentFeed() == id -->
            <!-- ko foreach: entries -->
	        <article class="r_content_card">
	            <div class="card_content">
	                <h2 data-bind="text: title"></h2>
	                <time datetime="2015-18-01">le 18/01/2015</time>
	                <p data-bind="text: contentSnippet"></p>
	                <a href="#" class="card_button" data-bind="attr: {href : link}">More...</a>
	            </div>
	        </article>        
            <!-- /ko -->	        
            <!-- /ko -->	        
            <!-- /ko -->
            <p class="fp_noFeeds"  data-bind="visible: feedsList().length == 0">No feeds in your list</p>	        
	    </div>
	    
	</div>
	
	<!-- ADDZONE -->
	
	<div class="r_addZone" data-bind="css : { opened : addPanelOpened }">
    
        <a href="#" class="r_addZone_close" data-bind="click : toggleAddPanel"><span>&times;</span> Cancel</a>
	    
	    <div class="r_addZone_wrapper g_standaloneField">
            
            <p>Please enter the new feed url :</p>
           
            <label for="r_addZoneInput" class="icon-world"></label>
            <input type="text" name="r_addZoneInput" id="r_addZoneInput" class="g_textInput" value="http://" data-bind="event: {keypress: addFeed}">
            
        </div>
	    
	</div>
	
	<!-- LOADER -->
	
	<div class="r__loader">
	    <div class="r_loaderWrapper">
            <p>Loading</p>
	        <div class="r_loaderProgressBar"></div>
	    </div>	    
	</div>
	
	<footer></footer>
	
	
	<script src="js/zepto.js"></script>
	<script src="js/simpleStorage.js"></script>
	<script src="js/ko.js"></script>
	<script src="https://www.google.com/jsapi"></script>
	<script>google.load("feeds", "1",'Feed');</script>
	<script src="js/gFeed.js"></script>
	<script src="js/notification.js"></script>
	<script src="js/Feeds.js"></script>
	<script src="js/ui.js"></script>
</body>
</html>