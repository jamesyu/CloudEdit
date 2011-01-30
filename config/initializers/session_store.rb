# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_cloudedit_session',
  :secret      => '8c0ca665e1e7274ff95bccb56e45fa053f80b3eed8dabe18a7effd8606c566fe4f88f575f1ef91c680eba4f7448c3e887144b699e0e4c3b9a164f5b3ccdfbb6b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
