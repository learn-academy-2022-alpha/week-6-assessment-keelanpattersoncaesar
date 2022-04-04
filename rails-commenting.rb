# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) // This is the controller for the blog posts. 
class BlogPostsController < ApplicationController
  def index
    # ---2) // An instance variable is created to store all of the blog posts.
    @posts = BlogPost.all
  end

  # ---3) // This is the method that displays the blog post. It uses the find method to find the blog post by its unique ID from the postgreSQL database. The ID is passed in as a parameter.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) // Creates a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) // Creates a new blog post. Checks to see if the post is valid using blog_post_params from line 64
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) // Finds each blog post by its unique ID.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) // Updates the blog post. Checks to see if the post is valid using blog_post_params from line 64
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) // If the blog post is not deleted, it will redirect back to its page.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) // Private means that anything below this line will not be able to be called from outside this class
  private
  def blog_post_params
    # ---10) // Strong parameters; while these are not strong, they are used to prevent malicious users from tampering with the data. If we wanted to, we could define even more parameters to make this more robust.
    params.require(:blog_post).permit(:title, :content)
  end
end
