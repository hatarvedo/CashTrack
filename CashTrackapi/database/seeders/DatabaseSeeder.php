<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kiadas_kategoria;
use App\Models\Jovedelem_kategoria;
use App\Models\Felhasznalo;
use App\Models\Jovedelem;
use App\Models\Kiadas;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        /*$kategoriak = ['Ház','Lakás','Építési telek','Garázs','Mezőgazdasági terület','Ipari ingatlan'];
        foreach ($kategoriak as $key => $value) 
        {
          Kategoria::create(['nev'=> $value]);
        }*/

        $kiadasKategoriak = ['étel', 'ház', 'közlekedés', 'telefonszolgáltató', 'egészségügy', 'ruházat', 'higénia', 'gyerekek', 'szórakozás', 'utazás', 'edzés', 'megtakarítás', 'malacpersely','hiteltörlesztés', 'támogatás', 'egyéb'];
        foreach ($kiadasKategoriak as $key => $value) {
          Kiadas_kategoria::create(['kiadasKategoria' => $value]);
        }

        $jovedelemKategoriak = ['fizetés', 'banki kamat', 'hitelfelvétel', 'nyugdíj', 'ösztöndíj', 'GYES', 'GYED', 'egyéb'];
        foreach ($jovedelemKategoriak as $key => $value) {
          Jovedelem_kategoria::create(['jovedelemKategoria' => $value]);
        }
        $felhasznalok = [
          ['Porkoláb','Martin','porkolab.martin@szikszi-ozd.hu','123']
        ];
        foreach ($felhasznalok as $key => $value) {
          Felhasznalo::create(['vezeteknev' => $value[0], 'keresztnev' => $value[1], 'email' => $value[2], 'jelszo' => $value[3]]);
        }
        $kiadasok = [
          [1,20000,'2024-12-24',9,'teszt']
        ];
        foreach ($kiadasok as $key => $value) {
          Kiadas::create(['felhasznaloID' => $value[0], 'kiadasHUF' => $value[1], 'kiadasDatum' => $value[2], 'kategoriaID' => $value[3], 'kiadasKomment' => $value[4]]);
        }

        $jovedelmek =[
          [1,1500000,'2024-12-24',1]
        ];
        foreach ($jovedelmek as $key => $value) {
          Jovedelem::create(['felhasznaloID' => $value[0], 'bevetelHUF' => $value[1], 'bevetelDatum' => $value[2], 'kategoriaID' => $value[3]]);
        }
    }
}
