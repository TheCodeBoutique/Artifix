# ==========================================================================
# Project:   Artifix
# Copyright: @2011 My Company, Inc.
# ==========================================================================

# This is your Buildfile, which sets build settings for your project.
# For example, this tells SproutCore's build tools that your requires
# the SproutCore framework.
# config :all, :required => :sproutcore

config :all, :required => [:sproutcore, :artifix_framework]

# In addition to this Buildfile, which gives settings for your entire project,
# each of your apps has its own Buildfile with settings specific to that app.



# CONFIGURE THEMES
 config :artifix, :theme => 'artifix_theme'
 config :artifix_theme,  :theme_name => 'artifix_theme'
