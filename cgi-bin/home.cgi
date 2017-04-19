#!/usr/bin/perl 


use DBI;
use CGI;

require '/srv/www/cgi-bin/jadrn022/db_connect.pl';
my $query = "select id, name from vendor ";

@arr = db_query_array($query);
            
print "content-type:text/html\n\n";
print "<html>";
print "<head>";
   print "<meta charset=\"utf-8\">";
   print "<meta http-equiv=\"Cache-Control\" content=\"no-cache, no-store, must-revalidate\" />";
   print "<meta http-equiv=\"Pragma\" content=\"no-cache\" />";
   print "<meta http-equiv=\"Expires\" content=\"0\" />"; 
   print "<title>Fashion League-HomePage</title>";
   print "<script src=\"http://jadran.sdsu.edu/~jadrn022/proj1/jquery.js\"></script>\n";
   print "<script src=\"http://jadran.sdsu.edu/~jadrn022/proj1/jqueryUI.js\"></script>\n";   
   print "<script src=\"http://jadran.sdsu.edu/~jadrn022/proj1/home.js\"></script>\n";
   print "<link rel=\"stylesheet\" href=\"http://jadran.sdsu.edu/~jadrn022/proj1/tab_example.css\">\n";
   
  
print "</head>\n";
print "<body>\n";
print "<div class=\"resp\">\n";
print "<div class=\"boundary_logo\">\n";
print "<div class=\"logo\">\n";

print "</div>\n";
print "</div>\n";

print "<div class=\"header\"></div>\n";

print "<form method=\"post\" id=\"form\">\n";
print "<input type=button id=\"logoutbtn\" value=\"Logout\"/>\n";

    print "<div id=\"tabs\">\n";
      print "<ul>\n";
        print "<li><a href=\"#tabs-1\"><span>New Record</span></a></li>\n";
        print "<li><a href=\"#tabs-2\"><span>Edit Record</span></a></li>\n";
        print "<li><a href=\"#tabs-3\"><span>Delete Record</span></a></li>\n";
      print "</ul>\n";

	  print "<div id=\"tabs-1\">\n";
      print "<form method=\"post\" id=\"form-1\"  enctype=\"multipart/form-data\" >\n";
      print "<table>\n";  
          
            print "<tr>\n";
            print "<td>SKU:<font color=\"red\">*</font></td>\n";
            print "<td><input type=\"text\" Placeholder='ABC-123' id=\"sku\" name=\"sku\" size=\"7\"/></td>\n";
            print "<td>&nbsp;<h5>             </h5></td>\n";
            print "<td>&nbsp;Vendor:<font color=\"red\">*</font></td>\n";
       	    print "<td>";
            print "<select id=\"vendor\" name=\"vendor\">";
            print "<option selected disabled value=\"0\">---Select---</option>";
                  for(my $i=0; $i < @arr; $i++)
                  {print "<option value = $arr[$i][0]>$arr[$i][1]</option>";}
           print "</select>";
           print "</td>";
           print "</tr>\n";
          
           print "<tr>";       
           print "<td> Manufacturer's ID:<font color=\"red\">*</font></td>\n";
           print "<td><input type=\"text\" id=\"MId\" name=\"MId\" size=\"10\"/></td>\n";
	   print "<td>&nbsp;</td>\n";
           print "<td>&nbsp;Category:<font color=\"red\">*</font></td>";
           print "<td>";
           print "<select id = \"category\" name=\"category\">";
	 print "<option selected disabled value=\"0\">---Select---</option>";
	  my $query = "select id, name from category ";
                  @arr = db_query_array($query);    
                  for(my $i=0; $i < @arr; $i++) 
                  {print "<option value = $arr[$i][0]>$arr[$i][1]</option>";}
           print "</select>";
           print "</td>";
           print "</tr>\n";
          
           print "<tr>\n";
           print "<td> Description:<font color=\"red\">*</font></td>\n";
           print "<td><textarea id=\"description\" name=\"description\" rows=\"8\" cols=\"34\"></textarea></td>\n";
           print "<td>&nbsp;<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></td>\n";
            print "<td>&nbsp;Features:<font color=\"red\">*</font></td>\n";
            print "<td><textarea id=\"features\" name\"features\" rows=\"8\" cols=\"34\"></textarea></td>\n";
           print "</tr>\n";
         
            print "<tr>\n";
            print "<td> Cost:<font color=\"red\">*</font></td>\n";
            print "<td>\$<input type=\"text\" id=\"cost\" name=\"cost\" size=\"10\"/></td>\n";
           print "<td>&nbsp;</td>\n";
            print "<td>&nbsp;Retail:<font color=\"red\">*</font></td>\n";
            print "<td>\$<input type=\"text\" id=\"retail\" name=\"retail\" size=\"10\"/></td>\n";
            print "</tr>\n";
           
         print "</table>";
 print "<table>";
   print "<tr>";   
   print "<td>";
    print "<table>";
            print "<tr>\n";
            print "<td>Product Image:<font color=\"red\">*</font></td>\n";
            print "<td>&nbsp;&nbsp;<input type=\"file\" id=\"image\" name=\"image\"/></td>\n";
            print "</tr>";
               
            print "<tr>";
      	    print "<td><input type=\"reset\" id=\"resetbtn1\" name=\"resetbtn\" class=\"button\" value=\"Clear\"/></td>";
            print "<td><input type=\"submit\" id=\"addbtn\" class=\"button\"  value=\"Add\"/></td>";
            print "</tr>";
           
    print "</table>";
   print "</td>";
   print "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id=\"pic\"></div></td>";
   print "</tr>";
print "</table>";
   print "<div id=\"message_line\">&nbsp;</div>\n";
print "</form>";
print "</div>\n";


   print "<div id=\"tabs-2\">\n";
   print "<form method=\"post\" id=\"form-2\">\n";
      print "<table>\n";
           print "<tr>\n";
            print "<td>Enter SKU:<font color=\"red\">*</font></td>\n";
            print "<td><input type=\"text\" Placeholder=\"ABC-123\" id=\"sku2\" name=\"sku\" size=\"7\"/></td>\n";
            print "<td>&nbsp;<h5>             </h5></td>\n";
            print "<td>&nbsp;Vendor:<font color=\"red\">*</font></td>\n";
            print "<td>";
	   print "<select disabled id=\"vendor2\" name=\"vendor\">";
           my $query2 = "select id, name from vendor ";
           @arr2 = db_query_array($query2);
	   print "<option selected disabled>---Select---</option>";
           for(my $i=0; $i < @arr2; $i++)
           {print "<option value = $arr2[$i][0]>$arr2[$i][1]</option>";}
           print "</select>";
           print "</td>";  
            print "</tr>\n";
            print "<tr>";
            print "<td>Manufacturer's ID:<font color=\"red\">*</font></td>\n";                                                                    print "<td><input type=\"text\" id=\"MId2\" name=\"MId\" readonly=\"readonly\" size=\"10\"/></td>\n";                              print "<td>&nbsp;</td>\n";
           print "<td>&nbsp;Category:<font color=\"red\">*</font></td>";
           print "<td>";
           print "<select disabled id = \"category2\" name=\"category\">";
           print "<option selected disabled>---Select---</option>";
                  my $query2c = "select id, name from category ";
                  @arr2c = db_query_array($query2c);
                  for(my $i=0; $i < @arr2c; $i++)
                  {print "<option value = $arr2c[$i][0]>$arr2c[$i][1]</option>";}
           print "</select>";
           print "</td>";
 
           print "</tr>\n";
           print "<tr>\n";
	   print "<td>Description:<font color=\"red\">*</font></td>\n";
	print "<td><textarea readonly=\"readonly\" id=\"description2\" name=\"description\" rows=\"8\" cols=\"34\"></textarea></td>\n";
              print "<td>&nbsp;<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></td>\n";
            print "<td>&nbsp;Features:<font color=\"red\">*</font></td>\n";
               print "<td><textarea  readonly=\"readonly\" id=\"features2\" name=\"features\"  rows=\"8\" cols=\"34\" ></textarea></td>\n";
           print "</tr>\n";
           print "<tr>\n";
	   print "<td>Cost:<font color=\"red\">*</font></td>\n";
            print "<td>\$<input type=\"text\" id=\"cost2\" name=\"cost\" readonly=\"readonly\" size=\"10\"/></td>\n";
           print "<td>&nbsp;</td>\n";
            print "<td>&nbsp;Retail:<font color=\"red\">*</font></td>\n";
            print "<td>\$<input type=\"text\" id=\"retail2\" name=\"retail\" readonly=\"readonly\" size=\"10\"/></td>\n";
            print "</tr>\n";

         print "</table>";
 print "<table>";
   print "<tr>";
   print "<td>";
    print "<table>";
            print "<tr>\n";
            print "<td>Product Image:</td>\n";
            print "<td>&nbsp;&nbsp;<input type=\"file\" id=\"image2\" name=\"image\"/>\n";
	    print "<input type=\"hidden\" size=\"1px\" id=\"hide_image2\" name=\"image\"/></td>\n";
            print "</tr>";

            print "<tr>";
            print "<td><input type=\"reset\" id=\"resetbtn2\" name=\"resetbtn\" class=\"button\" value=\"Clear\"/></td>";
            print "<td><input type=\"submit\" id=\"editbtn\" class=\"button\"  value=\"Edit\"/></td>";
            print "</tr>";

    print "</table>";
   print "</td>";
   print "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id=\"pic2\"></div></td>";
   print "</tr>";
print "</table>";
   print "<div id=\"message_line2\">&nbsp;</div>\n";
print "</form>";
print "</div>\n";

   print "<div id=\"tabs-3\">\n";
   print "<form method=\"post\" id=\"form-3\">\n";
      print "<table>\n";
           print "<tr>\n";
           print "<td>Enter SKU:<font color=\"red\">*</font></td>\n";
           print "<td><input type=\"text\" Placeholder=\"ABC-123\" id=\"sku3\" name=\"sku\" size=\"7\"/></td>\n";
           print "<td>&nbsp;<h5>             </h5></td>\n";
           print "<td>&nbsp;Vendor:</td>\n";
           
           print "<td>";
           print "<select disabled id=\"vendor3\" name=\"vendor\">";
            print "<option selected disabled></option>";
           my $query3 = "select id, name from vendor ";
           @arr3 = db_query_array($query3);
           for(my $i=0; $i < @arr3; $i++)
           {print "<option value = $arr3[$i][0]>$arr3[$i][1]</option>";}
           print "</select>";
           print "</td>";
            print "</tr>\n";
            print "<tr>";
            print "<td>Manufacturer's ID:</td>\n";                                                                                         print "<td><input type=\"text\" readonly=\"readonly\" id=\"MId3\" name=\"MId\" size=\"10\"/></td>\n";                                     print "<td>&nbsp;</td>\n";
           print "<td>&nbsp;Category:</td>";
   
           print "<td>";
           print "<select disabled id = \"category3\" name=\"category\">";
          	 print "<option selected disabled></option>";
                  my $query3c = "select id, name from category ";
                  @arr3c = db_query_array($query3c);
                  for(my $i=0; $i < @arr3c; $i++)
                  {print "<option value = $arr3c[$i][0]>$arr3c[$i][1]</option>";}
           print "</select>";
           print "</td>";
            print "</tr>\n";
           print "<tr>\n";
       print "<td>Description:</td>\n";
       print "<td><textarea readonly=\"readonly\" id=\"description3\" name=\"description\" rows=\"8\" cols=\"34\"></textarea></td>\n";
          print "<td>&nbsp;<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></td>\n";
            print "<td>&nbsp;Features:</td>\n";
        
       print "<td><textarea  readonly=\"readonly\" id=\"features3\" name=\"features\" rows=\"8\" cols=\"34\" ></textarea></td>\n";
           print "</tr>\n";
           print "<tr>\n";
           print "<td>Cost:</td>\n";
            print "<td>\$<input type=\"text\" readonly=\"readonly\" id=\"cost3\" name=\"cost\" size=\"10\"/></td>\n";
           print "<td>&nbsp;</td>\n";
            print "<td>&nbsp;Retail:</td>\n";
            print "<td>\$<input type=\"text\" readonly=\"readonly\" id=\"retail3\" name=\"retail\" size=\"10\"/></td>\n";
            print "</tr>\n";

         print "</table>";
 print "<table>";
   print "<tr>";
   print "<td>";
    print "<table>";
            print "<tr>\n";
            print "<td>Product Image:</td>\n";
            print "<td>&nbsp;&nbsp;<input type=\"text\" readonly=\"readonly\" id=\"image3\" name=\"image\" size=\"10\"/></td>\n";
            print "</tr>";

            print "<tr>";
            print "<td><input type=\"reset\" id=\"resetbtn3\" name=\"resetbtn\" class=\"button\" value=\"Clear\"/></td>";
            print "<td><input type=\"submit\" id=\"deletebtn\" class=\"button\"  value=\"Delete\"/></td>";
            print "</tr>";

    print "</table>";
   print "</td>";
   print "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id=\"pic3\"></div></td>";
   print "</tr>";
print "</table>";
   print "<div id=\"message_line3\">&nbsp;</div>\n";
print "</form>";
print "</div>\n";

     

print "</div>";
print "</form>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";

