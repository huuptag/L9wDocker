<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

trait HandlesResourcePolicy
{
    /**
     * Check the resource belongs to current authenticated user
     *
     * @param User $user
     * @param Model $model
     * @return boolean
     */
    public function isOwned(User $user, Model $model)
    {
        return $model->user()?->is($user);
    }
}
