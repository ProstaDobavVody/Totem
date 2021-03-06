# == Schema Information
#
# Table name: totem_blocks
#
#  id            :integer          not null, primary key
#  title         :string(255)
#  content       :text
#  position      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  totem_flow_id :integer
#

class TotemBlock < ActiveRecord::Base
  attr_accessible :content, :position, :title, :block_image_url, :created_at, :id, :totem_flow_id, :updated_at, :totem_type
  belongs_to :totem_flow
end
