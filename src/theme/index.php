<?php get_header() ?>

<!-- index -->
  <div id="main">
      <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
              <div class="post">
                <h2><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                <div class="post-meta"><?php the_date('', '<span class="date">', '</span>'); ?></div>
                <div class="post-content">
                    <?php the_content('Read the article') ?>
                </div>
              </div>
              
          <?php endwhile; ?>
          <?php wp_link_pages(); ?>
          
      <?php else : ?>
          <h2>No post found</h2>
          <p>This must be a pretty fresh blog as there are no posts found whatsoever!</p>
          <p><a href="<?php echo get_option('home') ?>">Return to the homepage.</a></p>
          
          
      <?php endif; ?>

  </div>
  <div id="sidebar">
      <?php get_sidebar() ?>
  </div>
<?php get_footer() ?>
