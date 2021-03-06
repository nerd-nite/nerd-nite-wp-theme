<?php get_header() ?>

<div id="main">

<?php if( have_posts() ) :?>
    <?php while( have_posts() ): the_post() ?>
        <div class="post">
                <h2 class="post-title"><?php the_title(); ?></h2>
                <div class="post-content">
                    <?php the_content() ?>
                </div>
              </div>
    <?php endwhile; ?>

<?php endif; ?>


  </div>
  <div id="sidebar">
      <?php get_sidebar() ?>
  </div>

<?php get_footer() ?>
