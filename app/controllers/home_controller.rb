class HomeController < ApplicationController
  def index
  	respond_with Client.all
  end
end
