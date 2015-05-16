class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json, :html

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :fname
    devise_parameter_sanitizer.for(:sign_up) << :lname
    devise_parameter_sanitizer.for(:sign_up) << :mobile
    devise_parameter_sanitizer.for(:sign_up) << :state
    devise_parameter_sanitizer.for(:sign_up) << :city
    devise_parameter_sanitizer.for(:sign_up) << :pincode
  end
end
