class DocumentsController < ApplicationController
  def index
    render :json => Document.limited.ordered.all  # for the purposes of the demo, just get the last 50 docs
  end
  
  def show
    render :json => Document.find(params[:id])
  end
  
  def create
    document = Document.create! params
    render :json => document
  end
  
  def update
    document = Document.find(params[:id])
    document.update_attributes! params
    render :json => document
  end
end
