<?php

namespace Tests\Unit;

use App\Models\Chirp;
use PHPUnit\Framework\TestCase;

class CreateChirpTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
        $chirp = Chirp::factory()->create([
            'message' => 'my chirp test test'
        ])->get();
        $this->assertIsInt($chirp->isDirty());
    }
}
