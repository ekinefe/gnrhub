// export async function onRequestPost(context) {
//     const db = context.env.DB;
//     const cookieHeader = context.request.headers.get("Cookie");

//     // 1. Get User Info from Cookie
//     if (!cookieHeader || !cookieHeader.includes("auth_token=")) {
//         return new Response("Unauthorized", { status: 401 });
//     }
//     const token = cookieHeader.split('auth_token=')[1].split(';')[0];
//     const user = JSON.parse(atob(token));

//     try {
//         const { session_id, name, kg, reps } = await context.request.json();

//         // 2. Insert Log with User Details
//         const res = await db.prepare(
//             `INSERT INTO gym_logs (session_id, username, user_email, user_role, exercise_name, weight_kg, reps) 
//              VALUES (?, ?, ?, ?, ?, ?, ?)`
//         ).bind(
//             session_id,
//             user.username,
//             user.email,
//             user.role,
//             name,
//             kg,
//             reps
//         ).run();

//         return new Response(JSON.stringify({ id: res.meta.last_row_id }), { status: 201 });
//     } catch (err) {
//         return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//     }
// }

// export async function onRequestDelete(context) {
//     const db = context.env.DB;
//     try {
//         const { id } = await context.request.json();
//         // Simple delete by ID
//         await db.prepare('DELETE FROM gym_logs WHERE id = ?').bind(id).run();
//         return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
//     } catch (err) {
//         return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//     }
// }

export async function onRequestPut(context) {
    const db = context.env.DB;
    // (Auth check omitted for brevity but recommended in production)

    try {
        const { id, name, kg, reps } = await context.request.json();

        // Update Log Entry
        await db.prepare(
            'UPDATE gym_logs SET exercise_name = ?, weight_kg = ?, reps = ? WHERE id = ?'
        ).bind(name, kg, reps, id).run();

        return new Response(JSON.stringify({ message: "Updated" }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}