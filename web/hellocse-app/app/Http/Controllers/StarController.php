<?php

namespace App\Http\Controllers;

use App\Models\Star;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $stars = Star::all();
        return Inertia::render('Stars/Index', [
            'stars' => $stars,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return Inertia::render('Stars/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'description' => 'nullable|string',
        ]);

        $imagePath = $request->file('image') ? $request->file('image')->store('public/stars') : null;
        Star::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'image' => $imagePath,
            'description' => $request->input('description'),
        ]);
        return redirect()->route('stars.index')->with('success', 'Star created successfully.');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Star  $star
     * @return \Illuminate\Http\Response
     */
    public function show(Star $star)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Star  $star
     * @return \Illuminate\Http\Response
     */

    public function edit(Star $star) {
        return Inertia::render('Stars/Edit', [
            'star' => $star,
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Star  $star
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Star $star) {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'description' => 'nullable|string',
        ]);

        $star->first_name = $request->input('first_name');
        $star->last_name = $request->input('last_name');
        $star->description = $request->input('description');
        if ($request->file('image')) {
            $imagePath = $request->file('image')->store('public/stars');
            $star->image = $imagePath;
        }

        $star->save();

        return redirect()->route('stars.index')->with('success', 'Star updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Star  $star
     * @return \Illuminate\Http\Response
     */
    public function destroy(Star $star) {
        $star->delete();
        return redirect()->route('stars.index')->with('success', 'Star deleted successfully.');
    }

}
