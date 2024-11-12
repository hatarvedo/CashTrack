<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kiadas_kategoria;
use App\Models\Jovedelem_kategoria;


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
    }
}
