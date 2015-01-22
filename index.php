<!doctype html>
<!--[if lte IE 7]> <html class="no-js ie67 ie678" lang="fr"> <![endif]-->
<!--[if IE 8]> <html class="no-js ie8 ie678" lang="fr"> <![endif]-->
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
	<header class="reader_header">
	    <h1>Dev <span>Reader</span></h1>
	</header>
	
    <!-- FILTERS -->
    
	<div class="reader_filters">
	    <a href="#" class="reader_filters_panelButton icon-params"></a>
	    
	    <div class="reader_filtersPanel">
	        <header class="reader_filtersPanel_header">
	            <span>close</span> 
	        </header>
	        <div class="reader_filtersPanel_content">
	            
	            <div class="filtersPanel_search g_standaloneField" data-bind="visible: feedsList().length > 0">
	                <label for="filtersPanel_searchInput" class="icon-search"></label>
	                <input type="text" name="filtersPanel_searchInput" id="filtersPanel_searchInput" class="g_textInput">
	            </div>
	            
	            <ul class="filtersPanel_feedsList" data-bind="foreach: feedsList, visible: feedsList().length > 0">
                    <li>
                        <input type="checkbox" value="" data-bind="attr: {id:id,value:id}, checked: enabled" > <label data-bind="text: name, attr: {for:id}"></label>
                    </li>                    
	            </ul>
	            
	            <p class="filtersPanel_noFeeds"  data-bind="visible: feedsList().length == 0">No feeds in your list</p>
	            
	            <a href="#" class="filtersPanel_add">+</a>
	            
	        </div>
	    </div>
	    
	    <div class="reader_overlay"></div>
	</div>
	
	<!-- CONTENT -->
	
	<div class="reader_content">
	    
	    <div class="reader_content_wpr">
	        <article class="reader_content_card">
	            <figure class="imgl">
	                <img src="images/frozen.jpg" alt="">
	            </figure>
	            <div class="card_content">
	                <h2>Titre</h2>
	                <time datetime="2015-18-01">le 18/01/2015</time>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	                <a href="#" class="card_button">Lire la suite</a>
	            </div>
	        </article>
            
            <article class="reader_content_card">
	            <figure class="imgl">
	                <img src="images/frozen.jpg" alt="">
	            </figure>
	            <div class="card_content">
	                <h2>Titre</h2>
	                <time datetime="2015-18-01">le 18/01/2015</time>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	                <a href="#" class="card_button">Lire la suite</a>
	            </div>
	        </article>
            
            <article class="reader_content_card">
	            <figure class="imgl">
	                <img src="images/frozen.jpg" alt="">
	            </figure>
	            <div class="card_content">
	                <h2>Titre</h2>
	                <time datetime="2015-18-01">le 18/01/2015</time>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	                <a href="#" class="card_button">Lire la suite</a>
	            </div>
	        </article>
            
            <article class="reader_content_card">
	            <figure class="imgl">
	                <img src="images/frozen.jpg" alt="">
	            </figure>
	            <div class="card_content">
	                <h2>Titre</h2>
	                <time datetime="2015-18-01">le 18/01/2015</time>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	                <a href="#">Lire la suite</a>
	            </div>
	        </article>
	    </div>
	    
	</div>
	
	<!-- ADDZONE -->
	
	<div class="reader_addZone">
    
        <a href="#" class="reader_addZone_close"><span>&times;</span> Cancel</a>
	    
	    <div class="reader_addZone_wrapper g_standaloneField">
            
            <p>Please enter the new feed url :</p>
           
            <label for="reader_addZoneInput" class="icon-world"></label>
            <input type="text" name="reader_addZoneInput" id="reader_addZoneInput" class="g_textInput" value="http://" data-bind="event: {keypress: addFeed}">
            
        </div>
	    
	</div>
	
	<!-- LOADER -->
	
	<div class="reader__loader">
	    <div class="reader_loaderWrapper">
            <p>Loading</p>
	        <div class="reader_loaderProgressBar"></div>
	    </div>	    
	</div>
	
	<footer></footer>
	
	
	
	<script src="js/jquery.min.js" defer></script>
	<script src="js/imgliquid.js" defer></script>
	<script src="js/ko.js" defer></script>
	<script src="js/Feeds.js" defer></script>
	<script src="js/ui.js" defer></script>
</body>
</html>