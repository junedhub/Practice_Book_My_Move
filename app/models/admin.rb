class Admin < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :trackable
  include DeviseTokenAuth::Concerns::User
end
