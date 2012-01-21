# ==========================================================================
# Project:   Artifex
# Copyright: @2011 My Company, Inc.
# ==========================================================================

# This is your Buildfile, which sets build settings for your project.
# For example, this tells SproutCore's build tools that your requires
# the SproutCore framework.
# config :all, :required => :sproutcore :minify => false, :html5_history => true, :overwrite_current => true

config :all, :required => [:sproutcore, :artifex_framework, :scui]

# In addition to this Buildfile, which gives settings for your entire project,
# each of your apps has its own Buildfile with settings specific to that app.



# CONFIGURE THEMES
 config :artifex, :theme => 'artifex_theme'
 config :artifex_theme,  :theme_name => 'artifex_theme'
