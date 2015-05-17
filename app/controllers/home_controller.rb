class HomeController < ApplicationController
  def index
  	respond_with Client.all
  end
  def show
    respond_with Client.find_by_fname(params[:fname])
  end
  def unique
    respond_with Client.find_by_fname(params[:fname])
  end
end
