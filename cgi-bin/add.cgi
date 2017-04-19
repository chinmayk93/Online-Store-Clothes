
use CGI;
require '/srv/www/cgi-bin/jadrn022/db_connect.pl';

my $q = new CGI;
my $query = CGI->new;
my $sku = $query->param('sku');
my $category = $query->param('category');
my $vendor = $query->param('vendor');
my $manuid = $query->param('MId');
my $descriptn = $query->param('description');
my $features = $query->param('features');
my $cost = $query->param('cost');
my $retail = $query->param('retail');
my $image = $query->param('image');
 
print "Content-type: text/html\n\n";

my $dup = "Select * from product where sku = '$sku'";
if(db_insert($dup) > 0)
{
   print "FAIL";
}
else
{
   my $state_ment = "INSERT INTO product values(".
   "'$sku',$category,$vendor,'$manuid','$descriptn',".
   "'$features',$cost,$retail,'$image');";
   db_insert($state_ment);
   print "SUCCESS";
}
