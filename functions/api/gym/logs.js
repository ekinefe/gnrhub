export async function onRequestPost(context) {
    const db = context.env.DB;
    try {
        const { session_id, name, kg, reps } = await context.request.json();

        const res = await db.prepare(
            'INSERT INTO gym_logs (session_id, exercise_name, weight_kg, reps) VALUES (?, ?, ?, ?)'
        ).bind(session_id, name, kg, reps).run();

        return new Response(JSON.stringify({ id: res.meta.last_row_id }), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function onRequestDelete(context) {
    const db = context.env.DB;
    try {
        const { id } = await context.request.json();
        await db.prepare('DELETE FROM gym_logs WHERE id = ?').bind(id).run();
        return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}