class PagesController < ApplicationController
  def index
    @sidebars = %w(latest games collections)
  end
end
