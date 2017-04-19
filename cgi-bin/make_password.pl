#!/usr/bin/perl
use Crypt::SaltedHash;

my @users = ('cs645','aayushi','sagar','aratrika','dada');
my @passwords = ('sp2017','aa01','ss02','aa03','dd04');
my @encrypted_passwords;
my $array_len = @users;

for($i=0; $i < $array_len; $i++) {
    my $encryption_object = Crypt::SaltedHash->new(algorithm => 'SHA-2');
    $encryption_object->add($passwords[$i]);
    push(@encrypted_passwords, $encryption_object->generate);
}

open(DATA,">passwords.dat") or die "Cannot open file";

for($i=0; $i < $array_len; $i++) {
    print DATA $users[$i]."=".$encrypted_passwords[$i]."\n";
    }

close(DATA);

