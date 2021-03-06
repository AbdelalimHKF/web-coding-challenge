class User < ApplicationRecord
  has_many :likes
  has_many :dislikes
  has_many :shops, through: :likes
  has_many :shops, through: :dislikes
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
