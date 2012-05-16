<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php bloginfo('name'); ?><?php the_title(' - ')?></title>
  <meta name="description" content="">

  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="<?php bloginfo('template_url')?>/boilerplate.css?ver=1.01">
  <link rel="stylesheet" href="<?php bloginfo('template_url')?>/style.css?ver=1.03">
 

  <script src="<?php bloginfo('template_url')?>/modernizr-2.5.3.min.js"></script>
  <?php 
  //error_reporting(E_ALL);
  //ini_set('display_errors', '1'); 
  ?>
  
  <?php 
  $city_name = get_bloginfo('name');
  $city_name = preg_replace("/^\s*nerd nite\s*/i", "", $city_name) 
  ?>
  
  <?php if (is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
  <?php wp_head() ?>
</head>
<body>
  <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
    <header>
        <div id='site-title'>
            <div id='nerd-nite-text'><h1>Nerd Nite</h1></div>
            <div id='city-name'><?php echo $city_name  ?></div>
        </div>
        <div id='logo'><img src="<?php bloginfo('template_url')?>/images/glasses.jpg"></div>
  </header>
  <nav>
      <ul>
    <li><a href='<?php echo get_home_url(); ?>'>Home</a></li>
      <?php wp_list_pages('title_li='); ?>
      </ul>
  </nav>