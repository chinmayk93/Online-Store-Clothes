

use CGI;
require '/srv/www/cgi-bin/jadrn022/db_connect.pl';

my $q = new CGI;
my $query = CGI->new;
my $sku = $query->param('sku');

print "Content-type: text/html\n\n";

my $stt = "Select * from product where sku = '$sku'";
if(db_insert($stt) < 1)
{
   print "FAIL";
}
else
{
   db_insert("delete from product where sku='$sku'");
   print "SUCCESS";
}
