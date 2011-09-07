class DocumentsController < ApplicationController
  respond_to :json

  def index
    respond_with Document.limited.ordered.all  # for the purposes of the demo, just get the last 50 docs
  end
  
  def show
    respond_with Document.find(params[:id])
  end
  
  def create
    respond_with Document.create!(params)
  end
  
  def update
    document = Document.find(params[:id])
    document.update_attributes! params
    respond_with document
  end
end
