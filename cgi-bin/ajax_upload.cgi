#!/usr/bin/perl 

use CGI;
use CGI::Carp qw (fatalsToBrowser);
use File::Basename;

# constants
$CGI::POST_MAX = 1024 * 3000; # Limit file size to 3MB
my $upload_dir = '/home/jadrn022/public_html/proj1/images';
my $safe_filename_chars = "a-zA-Z0-9_.-";

my $q = new CGI;
my $flname = $q->param("image");
unless($flname) {
    die "There was a problem uploading the image; ".
        "it's probably too big.";
    }

my $mimetype = $q->uploadInfo($flname)->{'Content-Type'};

# check the mime type and if it is not an image, reject it.
if($mimetype !~ /image/) {
    die "Invalid mime type, $mimetype";
    }

my ($name, $path, $extension) = fileparse($flname, '/..*/');
$flname = $name.$extension;
$flname =~ s/ //; #remove any spaces
if($flname !~ /^([$safe_filename_chars]+)$/) {
    die "Sorry, invalid character in the filename.";
    }

$flname = untaint($flname);
$flname = lc($flname);

# get a handle on the uploaded image     
my $fl_handle = $q->upload("image");

unless($fl_handle) { die "Invalid handle"; }

# save the file
open UPLOADFILE, ">$upload_dir/$flname" or die
    "Error, cannot save the file.";
binmode UPLOADFILE;
while(<$fl_handle>) {
    if($_ =~ /\<\?php/) {
        die "Invalid file, php tag found!";
        }
    print UPLOADFILE $_;
    }
close UPLOADFILE;

print <<EOF;
Content-type:  text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
        <meta http-equiv="content-type" 
                content="text/html;charset=utf-8" />    
</head>
<body>
<h2>Success, the file $filename has been uploaded</h2>
</body>
</html>
EOF

sub untaint {
    if($flname =~ m/^(\w+)$/) { die "Tainted filename!"; }
    return $1;
    }

