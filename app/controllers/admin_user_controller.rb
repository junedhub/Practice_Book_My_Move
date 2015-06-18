class AdminUserController < ApplicationController
	before_action :authenticate_admin!
  
  def members_only
    render json: {
      data: {
        message: "Welcome #{current_admin.name}",
        user: @user
      }
    }, status: 200
  end
end
