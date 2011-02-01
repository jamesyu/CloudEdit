class CreateDocuments < ActiveRecord::Migration
  def self.up
    create_table :documents do |t|
      t.string :title
      t.text :body
      t.timestamps
    end
    
    change_table :documents do |t|
      t.index :created_at
    end
  end

  def self.down
    drop_table :documents
  end
end
