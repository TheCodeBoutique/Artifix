// ==========================================================================
// Project:   ArtifixTheme
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals ArtifixTheme */

// This is the JavaScript representation of your theme.
//
// You don't have to create the whole theme on your own, though:
// this theme is currently based on SproutCore's Ace theme.
//
// NOTE: if you want to change the theme this one is based on, don't
// forget to change the :css_theme property in your buildfile.
// ArtifixTheme = SC.AceTheme.create({
//   name: 'artifix-theme'
// });

// To let apps use your theme, SproutCore must know where to find it.
// SC.Theme.addTheme(ArtifixTheme);

// You do not need to set it as a default theme. Apps should set the
// SC.defaultTheme variable. Usually, apps will create their own theme
// and base it on yours.
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix_theme');