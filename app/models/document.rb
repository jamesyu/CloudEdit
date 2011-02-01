class Document < ActiveRecord::Base
  attr_accessible :body, :title
  
  def to_json(options = {})
    super(options.merge(:only => [ :id, :title, :created_at, :body ]))
  end
end
