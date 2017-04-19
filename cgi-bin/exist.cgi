#!/usr/bin/perl 

use CGI;
require '/srv/www/cgi-bin/jadrn022/db_connect.pl';

my $q = new CGI;
my $query = CGI->new;
my $sku = $query->param('sku');

print "Content-type: text/html\n\n";

my $st = "Select * from product where sku = '$sku'";
 if(db_insert($st) > 0)
 { 
   print "FAIL";
 }
 else
 {
   print "SUCCESS";
 }       
